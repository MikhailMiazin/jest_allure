const { expect } = require("@jest/globals")
const postData = require("./api_requests")


test('response is defined', () => {postData('https://proxy.pmtech.ru:10005/Telemedialog/CentralService/jsonProxy/ExternalLogin', data = {
    "request": {
        "LoginOrEmail": "konstantinopolskiy.k@bk.ru",
        "Password": "polskiy",
        "AppInstanceId": "eUkcVaQgXc0:APA91bHDrVB979Y578rxmpj8VX",
        "Sign": "45802820415c",
        "AppCode": "com.postmodern.mobimedReact",
        "LangCode": "rus"
        }
    }).then(data => {
        expect(data).toBeDefined()
    })
}
)
