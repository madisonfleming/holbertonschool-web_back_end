#!/usr/bin/env python3
"""async comp"""


from async_comprehension import async_comprehension
from asyncio import gather, get_event_loop


async def measure_runtime() -> float:
    """measure total runtime and return it"""
    start = get_event_loop().time()
    await gather(async_comprehension(),
                 async_comprehension(),
                 async_comprehension(),
                 async_comprehension())
    end = get_event_loop().time()
    return end - start
