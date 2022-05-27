def test(request):
    if request.method == "POST":
        print(json.loads(request.body.decode()))
        return HttpResponse(request.body)
    return  render(request,'ajax.html')
