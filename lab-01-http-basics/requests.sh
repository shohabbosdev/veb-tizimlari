#!/bin/bash
# HTTP so'rovlar sinovi
curl -I -X GET https://jsonplaceholder.typicode.com/posts/1
curl -X POST -H 'Content-Type: application/json' -d '{"title":"Test"}' https://jsonplaceholder.typicode.com/posts
