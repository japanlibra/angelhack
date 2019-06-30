from subprocess import Popen, PIPE
import time
from typing import List

from node_config import CLIENT_CMD, TMP_FILE_PATH


def execute_commands(subcmds: List[bytes]) -> None:
    """ a wrapper of any interactive shell """
    fptr_err = open(TMP_FILE_PATH, "wb")
    fptr_out = open(TMP_FILE_PATH, "wb")
    fptr_in = open(TMP_FILE_PATH, "r")

    p = Popen(CLIENT_CMD, stdin=PIPE, stdout=fptr_out, stderr=fptr_err, bufsize=1)

    # execute commands
    for cmd in subcmds:
        if isinstance(cmd, str):
            cmd = cmd.encode('utf-8')
        p.stdin.write(cmd)
        out = fptr_in.read()

    # quit the shell
    p.stdin.write(b'q!\n')
    out = fptr_in.read()  # noqa: F841
    time.sleep(1)

    # finish the execution
    p.communicate()
    fptr_out.close()
    fptr_err.close()
    fptr_in.close()
    return None


def do_create_account() -> None:
    subcmds = [
        b'a c\n',
    ]  # type: List[bytes]
    execute_commands(subcmds)
    return None


def do_transfer(receiver: str, coin: str) -> None:
    subcmds = [
        b'a c\n',
        f't 0 {receiver} {coin}\n'.encode(),
    ]  # type: List[bytes]
    execute_commands(subcmds)
    return None


def _get_target_result(start_line_pattern: str) -> str:
    with open(TMP_FILE_PATH, 'r') as fptr:
        lines = fptr.readlines()
    result = ''
    start_record = False
    for line in lines:
        if start_line_pattern in line:
            start_record = True
        if start_record:
            result += f'{line}'
    return result


def get_result(target: str) -> str:
    """ get the result after execute_commands """
    if target == 'transfer':
        return _get_target_result('>> Transferring')
    elif target == 'create_account':
        return _get_target_result('>> Creating/retrieving next account from wallet')
    else:
        # all not implement commands
        return 'done'
