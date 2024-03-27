interface Computer {
    type: 'Prebuilt' | 'Custom';
    name: string;
    imageUrl: string;
    specification: string[];
    originalPrice: number;
    discountPrice: number;
    installmentAmount: number;
    estimatedArrival: string;
}

export default Computer;