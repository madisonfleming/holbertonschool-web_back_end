#!/usr/bin/env python3
"""async function"""


from basic_async_syntax import wait_random
import asyncio
from random import random
from typing import List


async def wait_n(n: int, max_delay: int) -> List[float]:
    """import wait_random and return list"""
    n = wait_random() 
    await asyncio.sleep(max_delay)
    return max_delay
