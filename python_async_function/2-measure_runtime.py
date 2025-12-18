#!/usr/bin/env python3
"""async function"""


from concurrent_coroutines import wait_n
import asyncio
from random import random
from typing import List
import time


def measure_time(n: int, max_delay: int) -> float:
    """import wait_n and return total time / n"""
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    return (end - start) / n
