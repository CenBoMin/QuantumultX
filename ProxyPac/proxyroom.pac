function FindProxyForURL(url, host)
{
  url = url.toLowerCase();
  host = host.toLowerCase();
  return "PROXY 192.168.15.123:8888; DIRECT";
}
