#!/usr/bin/env python3
"""py nosql"""


from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """return list of schools with topic"""
    result = []
    for t in mongo_collection.find():
        if 'topics' in t:
            if topic in t['topics']:
                result.append(t)
    return result
