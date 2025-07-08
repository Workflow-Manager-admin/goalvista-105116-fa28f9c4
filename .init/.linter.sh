#!/bin/bash
cd /home/kavia/workspace/code-generation/goalvista-105116-fa28f9c4/goal_roadmap_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

