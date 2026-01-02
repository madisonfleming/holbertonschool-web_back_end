#!/usr/bin/env python3
"""py nosql"""


from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """update"""
    mongo_collection.update_many(
        { "name": name },
        { "$set": {"topics": topics }}
    )
