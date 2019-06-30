import os
from typing import Dict, List


LIBRA_PATH = '/home/ec2-user/libra-master'

TMP_FILE_PATH = '/tmp/tmp_in_out'  # type: str

TARGET_NODE = 'mau'  # type: str

NODE_CONFIG = {
    'mau': {
        'node_host': '157.230.242.132',
        'node_port': '30307',
        'trusted_peers_path': os.path.join(LIBRA_PATH, 'scripts/cli/mau_trusted_peers.config.toml')
    },
    'default': {
        'node_host': 'ac.testnet.libra.org',
        'node_port': '8000',
        'trusted_peers_path': os.path.join(LIBRA_PATH, 'scripts/cli/trusted_peers.config.toml')
    },
}  # type: Dict[str, Dict[str, str]]

CLIENT_CMD = [
    os.path.join(LIBRA_PATH, 'target/debug/client'),
    # '-n', '/tmp/account_mau.txt',
    '--host', NODE_CONFIG[TARGET_NODE]['node_host'],
    '--port', NODE_CONFIG[TARGET_NODE]['node_port'],
    '-s', NODE_CONFIG[TARGET_NODE]['trusted_peers_path']
]  # type: List[str]
