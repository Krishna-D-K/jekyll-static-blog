---
title: Exploring FastAPI - A Brief Background
author: Krishna
categories: [Tech]
description: Heard of Flask. Maybe Django. But why is there another Python-based web framework out?
comments: true
pin: true
image: /assets/cover/fastapi-introduction.png
tags: ['python', 'fastapi']     # TAG names should always be lowercase
---

---

### Background

FastAPI is a modern web-based framework for building fast APIs in Python. Released in 2018, it is comparatively new to the field, but the ease of use, speed and robustness made it popular among developers. It is built upon [Starlette](https://www.starlette.io/) for the web parts and [Pydantic](https://docs.pydantic.dev/latest/) for the data handling.

#### What is Starlette?

Starlette is a lightweight HTTP web framework, built over the [**ASGI**](https://asgi.readthedocs.io/en/latest/) toolkit. Asynchronous Server Gateway Interface or ASGI is used to provide support for async-capable Python web servers and applications. Now Django and Flask do have limited support for async, however, FastAPI surpasses them, making it par with NodeJS and Go.

#### What is Pydantic?

As we all know Python is not as a strict language as C++, Java and JavaScript, it requires some kind of effort in data handling and validation. To improve upon this, Pydantic offers a solution for data validation, so that you may not have to deal with it. Besides use of custom validators and serializers makes it easy to process the data.

### Features

By making use of Pydantic's data handling and Starlette's ASGI toolkit, FastAPI speed becomes par with that of NodeJS and Django. Besides speed, it offers interactive API documentation and explorative web user interfaces. As the framework is based on OpenAPI, there are multiple options, 2 included by default. [Swagger UI](https://github.com/swagger-api/swagger-ui) and [ReDoc](https://github.com/Redocly/redoc). This makes testing and debugging the API endpoints easy and intuitive, all within the browser. Besides these, as listed on the website:

* WebSocket support.

* In-process background tasks.

* Startup and shutdown events.

* Test client built on HTTPX.

* CORS, GZip, Static Files, Streaming responses.

* Session **and** Cookie support.

* 100% test coverage.

* 100% type annotated codebase.


### Pros and Cons

1. **Community Support:** Since Django came around 2005 and FastAPI around 2018, the community built around Django is way greater than FastAPI

2. **Working with NoSQL databases:** With the increasing popularity of NoSQL databases, FastAPI supports many NoSQL databases, however, in Django, NoSQL databases are not officially supported.

3. **Ease of Use:** FastAPI. Django is a heavy fully-fledged framework.

4. **Learning curve:** FastAPI is easy for new developers for web development. However, the resources to learn about Django, online tutorials, and YouTube videos make it easier to adapt.


### Summing Up

I liked FastAPI, because of its minimalist feel and options to explore other libraries to perform certain tasks. Django is intended to design heavy, highly complex web applications, while FastAPI is for fast and scalable API endpoints. The thing about Django is, that because it is created for heavy tasking, it includes a lot of features under the mask that go unused (unless you are a development expert). However, since FastAPI is comparatively new, there is uncertainty about the future of the framework, and uncertainty about the scale people will adopt it.