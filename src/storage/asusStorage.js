const asus = [
    {
        "hardware": [
            {
                id: 'asus',
                gpu: '',
                gpuImage: '',
                gpuSample: [],
                cpu: '',
                cpuImage: '',
                cpuSample:[],
                motherBoard: '',
                motherBoardImg: '',
                motherboardSample: [],
                ssd: '',
                ssdImage: '',
                ssdSample:[],
                hdd: '',
                hddImage: '',
                hddSample:[],
                coolers:'',
                coolersImg: '',
                coolersSample:[],
                fans: '',
                fansImage:'',
                fansSample: [],
            }
        ],
        "peripherals": [
            {
                keyboard: '',
                keyboardImage:'',
                keyboardSamples: [],
                mouse: '',
                mouseImage:'',
                mouseSamples: [],
                headset: '',
                headsetImage:'',
                headsetSamples: [],
                monitor: '',
                monitorImage:'',
                monitorSamples: [],
            }
        ]
           
    }
]

tester.map((items) => {
    items.peripherals.map((item) => console.log(item));
})