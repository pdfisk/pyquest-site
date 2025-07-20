from browser import window


def byython_eval(code):
    try:
        exec(code)
    except Exception as e:
        print(str(e))


window.brython_eval = byython_eval
