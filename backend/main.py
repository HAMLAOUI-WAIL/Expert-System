from flask import Flask
from flask import request, jsonify,session
from flask_cors import CORS,cross_origin
import aima.logic as lg
import aima.utils as ut


# Our Knowledge Base would have rules and facts that provide to us themes corresponding to the topic

app = Flask(__name__)
fc = lg.FolKB()
goals = [
    "career",
    "more_money",
    "productivity",
    "leadership",
    "articulate"
    "healthy",
    "social_life",
    "Technology"
]


book = {
    'id':0,
    'title':'asdas',
    'img':'adsdsa',
    'description':'asddasd',
    'keyPoints':['asd','sadasd'],
    'Summary':'asdsad'
}

"""
fc.tell(make_money(Ahmed))


fc.ask(Book(Ahmed,x)
"""

Themes = [
    "Finance",
    "self_imporovment",
    "Psychology",
    "programming",
    "history",
    "sports",
    ""
]



'''
Career: Business, Management, Career Development, Self-help
Make more money: Personal Finance, Investing, Entrepreneurship
Productivity: Time Management, Organization, Self-improvement
Leadership: Management, Leadership Development, Biographies of Leaders
Articulate: Communication Skills, Public Speaking, Writing Skills
Healthy: Nutrition, Fitness, Wellness, Self-help
Social Life: Relationships, Communication Skills, Self-help
Technology: Technology Trends, Programming, Cybersecurity, Artificial Intelligence
'''


books = [
    {
        id:0,
        'title':'asdasd',
        'author':'asdsad',
        'themes':['',''],
        'description':'sadsad',
        'keyPoints' : ['',''],
        'Summary':''
    },
]


rules = [
    "leadership(x) & career(x) ==> Theme(Management,x)",
    "more_money(x) & career(x) == >Theme(Buisiness,x)",
    "health(x) & productivity(x) == >"
]


def ES_API():
    result = []





    return result


@app.route("/")
def hello_world():
    context = {}


    return jsonify(context), 200




'''
make_money(x) ==>  economics
make_money(x) & discipline(x) ==>  enteurprenarship
discipline(x) ==> leadership(x)
health(x) ==> biology
health(x) & productivity(x) ==> meditation
health(x) ==> bodybuilding
productivity(x) ==> self_improvment(x)
productivity(x) ==> management(x)
productivity(x) ==> stoicism(x)
family_and_relationships(x) ==> leadership(x)
buisiness(x) ==> economics(x)
buisiness(x) ==>  
'''

