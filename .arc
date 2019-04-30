@app
pizza-lmm

@http
get /
post /record

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

sensor
  device *String
  timestamp **Number