#!/usr/bin/env python3
"""async comp"""


from async_comprehension import async_comprehension
import asyncio


async def measure_runtime() -> float:
    """measure total runtime and return it"""
    start = asyncio.get_event_loop().time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )
    end = asyncio.get_event_loop().time()
    return end - start
