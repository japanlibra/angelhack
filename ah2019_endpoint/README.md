# Libra Shell Wrapper

This is a hackthon project in Angelhack 2019. It targets to interact with libra debug client by web endpoint.


## Prerequisite

- EC2 Amazon 2
- Python37
- Local buildable [libra](https://github.com/libra/libra) debug client


## Steps & Run the endpoint

```bash
# setup virtualenv
virtualenv -p $(which python3.7) py37

# install flask
./py37/bin/pip3.7 install flask

# execute flask endpoint
FLASK_APP=app.py ../ah2019_endpoint/py37/bin/flask run --host=0.0.0.0
```

After initiate the program, you can access by following API:

**Create account**
- endpoint:5000/create_account

**Send receiver certain amount of coin**
- endpoint:5000/transfer/`<receiver>`/`<coin>`


## Other development tools

```bash
./py37/bin/pip3.7 install flake8
./py37/bin/flake8 --max-line-length=120 *.py
```

```bash
./py37/bin/pip3.7 install mypy
./py37/bin/mypy *.py
```
