#!/usr/bin/env python3
"""async function"""


from basic_async_syntax import wait_random
import asyncio
from random import random
from typing import List
import time


def task_wait_random(max_delay: int) -> asyncio.Task:
    """import wait_random and return asyncio.task"""
    return asyncio.create_task(wait_random(max_delay))
