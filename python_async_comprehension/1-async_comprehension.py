#!/usr/bin/env python3
"""async comprehension"""


import asyncio
from async_generator import async_generator
import random
from typing import List


async def async_comprehension() -> List[float]:
    """collect 10 numbers and return 10 random numbers"""
    return [i async for i in async_generator()]
