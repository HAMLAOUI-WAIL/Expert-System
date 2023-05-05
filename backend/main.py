from flask import Flask
from flask import request, jsonify,session
from flask_cors import CORS,cross_origin
import aima.logic as lg
import aima.utils as ut


2nd part :
-----------------------

Enterpren ==> Book(jamayka1)
Enterpren ==> Book(jamayka3)
finance ==> Book(rich dad poor dad)

 

questions :
- what do we follow when we create a knowledge base  [ par exemple database kayen normalization how about in KB ]

"""

from aima3.logic import *

data = [
        "makemoney(x) & leadership(x) == > THEMES(Enterpren)",
        "makemoney(x) & productivity(x) == > THEMES(finance)",
        "healthy(x) & stronger relatios(x) == > THEMES(Networking)",
        "healthy(x) & stronger relatios(x) == > THEMES(exerciseAndHealth)",
        
    ]

fc = FolKB()

def KnowldgeBase():
    for i in data:
        fc.tell(expr(i))
    return

KnowldgeBase()