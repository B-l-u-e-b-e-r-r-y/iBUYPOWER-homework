import Computer from "@/types/Computer";

const computerList: Computer[] = [
    {
        type: 'Prebuilt',
        name: 'RDY Lancool 004',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27514/gaming-pc-01-Lancool004-nvidia-main-400.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'Intel® Core™ i7-14700KF CPU',
            'GeForce RTX 4080 SUPER - 16GB',
            '2TB M.2 NVMe Gen4 SSD',
            '32GB DDR5-6000MHz RGB RAM'
        ],
        originalPrice: 2699,
        discountPrice: 2399,
        installmentAmount: 116,
        estimatedArrival: '2024/03/25'
    },
    {
        type: 'Prebuilt',
        name: 'RDY Trace 7MP 001',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27279/gaming-pc-01-Trace7MP001-main-KBM-400-solo.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'AMD Ryzen 7 7700X CPU',
            'GeForce RTX 4070 - 12GB',
            '1TB M.2 NVMe SSD',
            '32GB DDR5-5600MHz RGB RAM'
        ],
        originalPrice: 1849,
        discountPrice: 1649,
        installmentAmount: 80,
        estimatedArrival: '2024/03/25'
    },
    {
        type: 'Custom',
        name: 'Intel Core 14th Gen Extreme Ultra Daily Deal',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25755/gaming-pc-01-H7-Flow-Black-main-400.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'Intel® Core™ i9-14900KS CPU',
            'GeForce RTX 4090 - 24GB',
            '2TB WD M.2 NVMe SSD',
            '32GB DDR5-5200MHz RAM'
        ],
        originalPrice: 4049,
        discountPrice: 3699,
        installmentAmount: 149,
        estimatedArrival: '2024/04/01'
    },
    {
        type: 'Custom',
        name: 'AMD Ryzen Pro Daily Deal',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26936/gaming-pc-01-Lancool-216-black-main-400.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'AMD Ryzen™ 7 7700X CPU',
            'GeForce RTX 4070 Ti - 12GB',
            '1TB WD M.2 NVMe SSD',
            '32GB DDR5-5200MHz RAM'
        ],
        originalPrice: 2249,
        discountPrice: 1899,
        installmentAmount: 92,
        estimatedArrival: '2024/04/01'
    },
    {
        type: 'Prebuilt',
        name: 'RDY Y40 Watsom Amelia',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27638/gaming-pc-01-RDY-Watson-main-kbm-400.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'Intel® Core™ i7-14700KF CPU',
            'GeForce RTX 4070 Ti SUPER - 16GB',
            '2TB M.2 NVMe Gen4 SSD',
            '32GB DDR5-6000 Kingston RGB RAM'
        ],
        originalPrice: 2599,
        discountPrice: 2399,
        installmentAmount: 116,
        estimatedArrival: '2024/03/25'
    },
    {
        type: 'Prebuilt',
        name: 'RDY Y40 VALORANT VCTA R001',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27462/gaming-pc-01-Y40-VCTA-R002-main-kbm-400-.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'AMD Ryzen™ 7 7800X3D CPU',
            'GeForce RTX 4070 - 12GB',
            '2TB M.2 NVMe Gen4 SSD',
            '32GB DDR5-5600MHz RGB RAM'
        ],
        originalPrice: 2049,
        discountPrice: 1799,
        installmentAmount: 87,
        estimatedArrival: '2024/03/25'
    },
    {
        type: 'Custom',
        name: 'Intel 14th Gen Level Up PC Daily Deal',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25756/gaming-pc-01-H7-Flow-white-main-400.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'Intel® Core™ i7-14700KF CPU',
            'GeForce RTX 4070 Ti - 12GB',
            '1TB WD M.2 NVMe SSD',
            '32GB DDR5-5200MHz RAM'
        ],
        originalPrice: 2459,
        discountPrice: 2109,
        installmentAmount: 102,
        estimatedArrival: '2024/04/01'
    },
    {
        type: 'Custom',
        name: 'AMD Gaming PC Configuration 4 Daily Deal',
        imageUrl: 'https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25755/gaming-pc-01-H7-Flow-Black-main-400.png?v=a472d07a2fa40b385642b8d0ae643ea1d4164379',
        specification: [
            'Windows 11 Home',
            'AMD Ryzen™ 9 7900X CPU',
            'GeForce RTX 4070 Ti SUPER - 16GB',
            '1TB WD M.2 NVMe SSD',
            '32GB DDR5-5200MHz RAM'
        ],
        originalPrice: 2509,
        discountPrice: 2209,
        installmentAmount: 107,
        estimatedArrival: '2024/04/01'
    }
];

export default computerList;