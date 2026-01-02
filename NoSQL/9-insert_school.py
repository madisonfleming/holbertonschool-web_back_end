#!/usr/bin/env python3
"""py nosql"""


from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """insert"""
    return mongo_collection.insert_one(kwargs).inserted_id
