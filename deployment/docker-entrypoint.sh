#!/bin/sh

MAX_SPACE_SIZE=${MAX_SPACE_SIZE:-128}
export PORT=$PORT
exec node --max_old_space_size=${MAX_SPACE_SIZE} server.js
