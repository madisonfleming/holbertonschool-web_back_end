#!/usr/bin/env python3
"""py nosql"""
from pymongo import MongoClient

def list_all(mongo_collection):
    """ list all documents"""
    document = []
    for docu in mongo_collection.find():
        document.append(docu)
    return document
