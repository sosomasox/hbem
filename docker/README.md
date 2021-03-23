## ビルド

```
docker build --no-cache -t hbem .
```


## 使い方

```
docker run -d  \
  -name hbem \
  -e MONGODB_ENDPOINT=<mongodb_endpoint> \
  -e PORT=<service_port> \
  -p <local_service_port>:<service_port>
  hbem
```
