import gpuImg from '../assets/asusimages/rx7000.png'
import motherboard from '../assets/asusimages/tuf-a620m.png'
import ssdROG from '../assets/asusimages/rog-strix-arion.png'
import hddROG from '../assets/asusimages/ASUS FX HDD.png'
import coolers from '../assets/asusimages/coolers.png'
import fans from '../assets/asusimages/fans.png'
import kb from '../assets/asusimages/keyboard.png';
import mouse from '../assets/asusimages/mouse.png';
import headset from '../assets/asusimages/mouse.png';

export const asus = [
    {
        "hardware": [
            {
                id: 'asus',
                gpu: 'RX7000',
                gpuImage: gpuImg,
                gpuSample: [],
                cpu: '',
                cpuImage: '',
                cpuSample:[],
                motherBoard: 'TUF A620M',
                motherBoardImg: motherboard,
                motherboardSample: [],
                ssd: 'ROG Strix Arion',
                ssdImage: ssdROG,
                ssdSample:[],
                hdd: 'Asus FX HDD',
                hddImage: hddROG,
                hddSample:[],
                coolers:'ROG Ryujin III 360 ',
                coolersImg: coolers,
                coolersSample:[],
                fans: 'TUF LC 240',
                fansImage:fans,
                fansSample: [],
            }
        ],
        "peripherals": [
            {
                keyboard: 'ROG Strix Scope RX TKL',
                keyboardImage: kb,
                keyboardSamples: [],
                mouse: 'ROG Harpe Ace Aim Lab Edition',
                mouseImage: mouse,
                mouseSamples: [],
                headset: 'ROG Delta S Core',
                headsetImage: headset,
                headsetSamples: [],
                monitor: '',
                monitorImage:'',
                monitorSamples: [],
            }
        ]
           
    }
]

const asusProd = [];

asus.map((item) => item.hardware.map((items) => asusProd.push(items.coolers, items.coolersImg)));

console.log(asusProd)