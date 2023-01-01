import typing

import requests

LEETCODE_DOMAIN = "https://leetcode.com"
LEETCODE_ALL_PROBLEM_URL = LEETCODE_DOMAIN + "/problemset/all/"


class IQuestion(typing.TypedDict):
    id: int
    title: str
    url: str
    date: str
    topic: str
    difficulty: str
    content: str


def get_question_of_today() -> IQuestion:
    """Fetch today's question from Leetcode's GraphQL API"""

    client = requests.session()

    # Visit leetcode webpage to retrieve a CSRF token first
    client.get(LEETCODE_ALL_PROBLEM_URL)

    if "csrftoken" in client.cookies:
        csrftoken = client.cookies["csrftoken"]
    else:
        csrftoken = ""

    response = client.post(
        LEETCODE_DOMAIN + "/graphql/",
        data={
            "query": """query questionOfToday {
                activeDailyCodingChallengeQuestion {
                    link
                    date
                    question {
                        questionFrontendId
                        title titleSlug
                        content
                        isPaidOnly
                        difficulty
                        topicTags {
                            name
                            slug
                        }
                        stats
                        hints
                    }
                }
            }""",
            "variables": {},
            "operationName": "questionOfToday",
            "csrfmiddlewaretoken": csrftoken,
        },
        headers={"referer": LEETCODE_ALL_PROBLEM_URL},
    )

    try:
        data = response.json()
        info = data["data"]["activeDailyCodingChallengeQuestion"]
        return IQuestion(
            id=info["question"]["questionFrontendId"],
            title=info["question"]["title"],
            url=LEETCODE_DOMAIN + info["link"],
            date=info["date"],
            topic=", ".join([topic["name"] for topic in info["question"]["topicTags"]]),
            difficulty=info["question"]["difficulty"],
            content=info["question"]["content"],
        )
    except ValueError:
        raise Exception(f"Failed to decode JSON, API response: {response.text}")
    except BaseException as error:
        raise Exception(f"Unexpected {error=}, {type(error)=}")

if __name__ == "__main__":
    import json

    print(json.dumps(get_question_of_today(), ensure_ascii=False))