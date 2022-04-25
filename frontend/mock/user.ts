import Mock from 'mockjs'

Mock.mock(/\/api\/user\/info/, 'post', function () {
    return Mock.mock({
        "code": 0,
        "message": "",
        "data": {
            userId: 1,
            nickName: '拉灰Larry'
        }
    })
})