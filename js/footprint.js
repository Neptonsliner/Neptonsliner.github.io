var myChart = echarts.init(document.getElementById('myMap'));

var data = [
    {name: '南平', value: ['福建省']},
    {name: '郑州', value: ['河南省']},
    {name: '成都', value: ['四川省']},
    {name: '武汉', value: ['湖北省']},
    {name: '三明', value: ['福建省']},
    {name: '福州', value: ['福建省']},
    {name: '厦门', value: ['福建省']},
    {name: '泉州', value: ['福建省']},
    {name: '杭州', value: ['浙江省']},
    {name: '上海', value: ['上海市']},
    {name: '无锡', value: ['江苏省']},
    {name: '苏州', value: ['江苏省']},
    {name: '南京', value: ['江苏省']},
    {name: '开封', value: ['河南省']},
    {name: '洛阳', value: ['河南省']},
    {name: '许昌', value: ['河南省']},
    {name: '西安', value: ['陕西省']},
    {name: '兰州', value: ['甘肃省']},
    {name: '西宁', value: ['青海省']},
    {name: '北京', value: ['北京市']},
    {name: '长沙', value: ['湖南省']},
    {name: '湘西州', value: ['湖南省']},
    {name: '张家界', value: ['湖南省']},
    {name: '深圳', value: ['广东省']},
    {name: '东莞', value: ['广东省']},
    {name: '青岛', value: ['山东省']}
];
var geoCoordMap = {
    '南平':[118.076943527675,27.6230098946087],
    '郑州':[113.6741760513653,34.74114136493957],
    '成都':[104.06186393714711,30.67037049469255],
    '武汉':[114.30161249577395,30.577572603005073],
    '三明':[117.63619752762793,26.264867705796636],
    '福州':[119.30804,26.075520000000026],
    '厦门':[118.13870233757632,24.48382636258175],
    '泉州':[118.62145161749345,24.872109767610485],
    '杭州':[120.153497680494,30.28753083300001],
    '上海':[121.46307,31.20598],
    '无锡':[120.34689,31.5729],
    '苏州':[120.65125,31.31949],
    '南京':[118.79669,32.05838],
    '开封':[114.09725,34.786],
    '洛阳':[112.43950,34.687],
    '许昌':[113.85215,34.023],
    '西安':[108.9452,34.276],
    '兰州':[103.82355,36.05974],
    '西宁':[101.77782,36.61729],
    '北京':[116.40528,39.90498],
    '长沙':[112.94807,28.23865],
    '湘西州':[109.73425,28.311],
    '张家界':[110.4685,29.127],
    '深圳':[114.07592,22.62138],
    '东莞':[113.7530,23.043],
    '青岛':[120.35517,36.08298]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            name1 = params.name
            distriction = params.value[2]
            // describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + name1
                + '</div>'
                + distriction
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series : [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#D2691E',
                    shadowBlur: 0,
                    shadowColor: '#333',
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);
