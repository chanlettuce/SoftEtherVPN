import * as VPN from 'vpnrpc';

class VpnRpcHelper {
  private static _instance: VPN.VpnServerRpc;

  private constructor() {}

  public static get instance() {
    if (this._instance) return this._instance;

    if (!VPN.VpnServerRpc.IsNodeJS()) return new VPN.VpnServerRpc();
    else return new VPN.VpnServerRpc('127.0.0.1', 443, '', 'PASSWORD_HERE', false);
  }
}
