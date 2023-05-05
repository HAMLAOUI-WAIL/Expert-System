from flask import Flask
from flask import request, jsonify,session
from flask_cors import CORS,cross_origin
import aima.logic as lg
import aima.utils as ut


# Our Knowledge Base would have rules and facts that provide to us themes corresponding to the topic

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

