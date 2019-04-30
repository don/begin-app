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

foo
  key *String

sensor
  device *String
  timestamp **Number