import sys
from io import StringIO

from browser import window


def brython_eval(code):
    old_stdout = sys.stdout
    old_stderr = sys.stderr
    buffer = StringIO()
    sys.stdout = buffer
    sys.stderr = buffer
    try:
        exec(code)
        result = buffer.getvalue()
    except Exception as e:
        result = str(e)
    finally:
        sys.stdout = old_stdout
        sys.stderr = old_stderr
    return result


window.brython_eval = brython_eval


def byython_eval2(code):
    try:
        exec(code)
        return 'OK'
    except Exception as e:
        return str(e)


window.brython_eval = byython_eval2
