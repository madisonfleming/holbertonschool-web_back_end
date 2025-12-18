#!/usr/bin/env python3
"""async generator"""


import random
import asyncio
import typing


async def async_generator() -> typing.AsyncGenerator[float, None]:
    """loop 10 times then yield a random number"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
