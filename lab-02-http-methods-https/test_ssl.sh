#!/bin/bash
# SSL/TLS sertifikatini tekshirish
openssl s_client -connect google.com:443 -tls1_3
