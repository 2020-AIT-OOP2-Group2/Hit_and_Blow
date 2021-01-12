FROM python:3.8.5-alpine
WORKDIR /app
RUN apk upgrade&&\
    apk add --no-cache gcc linux-headers musl-dev build-base libffi-dev libressl-dev
RUN python3 -m pip install --upgrade pip&&\
    python3 -m pip install cryptography PyMySQL Flask

# waitライブラリの追加
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
# ライブラリの権限変更
RUN chmod +x /wait

EXPOSE 5000
# CMD ["python3","web.py"]
CMD /wait && python3 web.py
