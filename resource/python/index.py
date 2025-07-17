import sys
from browser import window
from io import StringIO

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
