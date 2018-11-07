import React, {Component} from 'react';
import styled from 'styled-components';
import {Elastic} from "gsap/all";
import TweenMax from "gsap/TweenMaxBase";
import {Titel2White} from "../helpers/styling-texts";

const Container = styled.div`
  width: 100%;
  position: relative;

`;

const DateField = styled.div`
  width: 100%;
  position: absolute;
  top: 80%;
  text-align: center;
`;

// const DateFieldText = styled.h2`
//     width: 100%
//     color: white;
//     font-size: 4.0rem;
// `;

class Mountain extends Component {
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;


        this.polylion_shapes = document.getElementsByTagName("polygon");
        this.polylion_staggerFrom = {
            scale: 0,
            opacity: 0,
            transformOrigin: 'top left',
            ease: Elastic.easeInOut,
        };
        let polyNames = [];
        for (let i = 0; i < 133; i++) {
            polyNames.push(this['polyElement' + 1]);
        }


    }

    componentDidMount() {
        this.myTween = TweenMax.staggerFrom(this.polylion_shapes, 4, this.polylion_staggerFrom, 0.02);
    }

    render() {
        return (
            <Container ref={div => this.myElement = div}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 640 1100 950" className="polymnt">
                    <title>winter-week</title>
                    <g id="poly">
                        <g>
                            <polygon ref={polygon => this.polyElement = polygon}
                                     points="15.847 781.98 84.604 731.927 94.631 744.798 86.036 814.872 48.793 773.4 15.847 781.98"
                                     style={{fill: "#5c5a6e"}}/>
                            <polygon ref={polygon => this.polyElement2 = polygon}
                                     points="94.632 744.798 110.388 731.927 163.389 796.281 88.317 796.281 94.632 744.798"
                                     style={{fill: "#4e5663"}}/>
                            <polygon ref={polygon => this.polyElement3 = polygon}
                                     points="141.393 769.573 207.466 780.96 288.828 841.511 215.11 844.465 163.389 796.281 141.393 769.573"
                                     style={{fill: "#6f7791"}}/>
                            <polygon ref={polygon => this.polyElement4 = polygon}
                                     points="215.11 844.464 150.07 880.5 81.726 877.841 86.037 814.872 88.317 796.281 163.388 796.281 215.11 844.464"
                                     style={{fill: "#71758a"}}/>
                            <polygon ref={polygon => this.polyElement5 = polygon}
                                     points="0 806.624 0 813.68 81.726 877.841 17.759 796.281 0 806.624"
                                     style={{fill: "#697488"}}/>
                            <polygon ref={polygon => this.polyElement6 = polygon}
                                     points="48.793 773.399 29.218 789.607 38.283 822.45 81.726 877.841 86.036 814.872 48.793 773.399"
                                     style={{fill: "#6f778e"}}/>
                            <polygon ref={polygon => this.polyElement7 = polygon}
                                     points="38.283 822.449 29.218 789.608 17.759 796.28 38.283 822.449"
                                     style={{fill: "#98959f"}}/>
                            <polygon ref={polygon => this.polyElement8 = polygon}
                                     points="15.847 781.98 29.219 789.608 48.793 773.4 15.847 781.98"
                                     style={{fill: "#edeff3"}}/>
                            <polygon ref={polygon => this.polyElement9 = polygon}
                                     points="0 791.951 0 807.041 29.219 789.608 15.847 781.98 0 791.951"
                                     style={{fill: "#fff"}}/>
                            <polygon ref={polygon => this.polyElement10 = polygon}
                                     points="0 848.671 22.481 877.841 63.515 863.544 0 814.134 0 848.671"
                                     style={{fill: "#dcd4d7"}}/>
                            <polygon ref={polygon => this.polyElement11 = polygon}
                                     points="81.726 877.841 63.515 863.543 22.481 877.841 81.726 877.841"
                                     style={{fill: "#fff8f7"}}/>
                            <polygon ref={polygon => this.polyElement12 = polygon}
                                     points="0 884.697 22.481 877.841 0 848.671 0 884.697" style={{fill: "#fffffc"}}/>
                            <polygon ref={polygon => this.polyElement13 = polygon}
                                     points="81.726 877.841 101.793 889.951 125.852 879.557 81.726 877.841"
                                     style={{fill: "#faf9f8"}}/>
                            <polygon ref={polygon => this.polyElement14 = polygon}
                                     points="158.286 772.485 175.564 764.104 178.36 775.944 158.286 772.485"
                                     style={{fill: "#fef9fb"}}/>
                            <polygon ref={polygon => this.polyElement15 = polygon}
                                     points="175.564 764.104 218.537 773.399 207.466 780.96 178.36 775.944 175.564 764.104"
                                     style={{fill: "#828fa2"}}/>
                            <polygon ref={polygon => this.polyElement16 = polygon}
                                     points="253.632 731.927 240.74 759.813 218.537 773.399 175.564 764.104 253.632 731.927"
                                     style={{fill: "#848f9d"}}/>
                            <polygon ref={polygon => this.polyElement17 = polygon}
                                     points="240.74 759.814 257.929 764.104 292.308 739.793 288.827 704.041 253.632 731.928 240.74 759.814"
                                     style={{fill: "#969ea2"}}/>
                            <polygon ref={polygon => this.polyElement18 = polygon}
                                     points="288.827 704.041 292.307 739.793 310.929 731.927 288.827 704.041"
                                     style={{fill: "#6c7a90"}}/>
                            <polygon ref={polygon => this.polyElement19 = polygon}
                                     points="310.929 731.927 292.307 739.792 307.348 764.104 318.091 759.098 310.929 731.927"
                                     style={{fill: "#7f8da3"}}/>
                            <polygon ref={polygon => this.polyElement20 = polygon}
                                     points="288.827 704.041 305.199 704.041 322.389 718.342 299.878 717.984 288.827 704.041"
                                     style={{fill: "#67778a"}}/>
                            <polygon ref={polygon => this.polyElement21 = polygon}
                                     points="310.929 731.927 346.74 772.532 318.091 759.098 310.929 731.927"
                                     style={{fill: "#67778a"}}/>
                            <polygon ref={polygon => this.polyElement22 = polygon}
                                     points="299.878 717.984 310.929 731.927 346.74 772.532 404.037 764.104 346.74 739.793 322.388 718.341 299.878 717.984"
                                     style={{fill: "#7e88a2"}}/>
                            <polygon ref={polygon => this.polyElement23 = polygon}
                                     points="240.74 759.814 257.929 764.104 207.466 780.961 240.74 759.814"
                                     style={{fill: "#eddfde"}}/>
                            <polygon ref={polygon => this.polyElement24 = polygon}
                                     points="207.466 780.96 234.772 791.275 264.377 806.028 230.731 798.273 207.466 780.96"
                                     style={{fill: "#575a6d"}}/>
                            <polygon ref={polygon => this.polyElement25 = polygon}
                                     points="230.73 798.273 266.523 824.912 297.56 830.841 264.377 806.028 230.73 798.273"
                                     style={{fill: "#a39ea4"}}/>
                            <polygon ref={polygon => this.polyElement26 = polygon}
                                     points="266.524 824.913 297.561 830.841 334.804 844.465 328.835 853.503 288.827 841.511 266.524 824.913"
                                     style={{fill: "#b5b3b9"}}/>
                            <polygon ref={polygon => this.polyElement27 = polygon}
                                     points="215.11 844.464 303.917 870.692 318.092 860.633 288.827 841.511 215.11 844.464"
                                     style={{fill: "#f9faf8"}}/>
                            <polygon ref={polygon => this.polyElement28 = polygon}
                                     points="288.827 841.511 318.091 860.634 328.835 853.503 288.827 841.511"
                                     style={{fill: "#f8f5ed"}}/>
                            <polygon ref={polygon => this.polyElement29 = polygon}
                                     points="325.02 820.514 335.833 820.514 372.524 820.154 341.488 830.842 325.02 820.514"
                                     style={{fill: "#727791"}}/>
                            <polygon ref={polygon => this.polyElement30 = polygon}
                                     points="446.056 798.314 335.833 820.514 372.524 820.153 446.056 798.314"
                                     style={{fill: "#fbfbfd"}}/>
                            <polygon ref={polygon => this.polyElement31 = polygon}
                                     points="425.047 839.208 378.97 841.511 341.488 830.841 372.524 820.153 446.056 798.314 425.047 839.208"
                                     style={{fill: "#a2a2a3"}}/>
                            <polygon ref={polygon => this.polyElement32 = polygon}
                                     points="335.833 820.514 352.947 807.019 367.75 796.423 370.853 793.495 386.268 781.98 416.991 770.387 437.939 777.69 446.056 798.314 335.833 820.514"
                                     style={{fill: "#828fa2"}}/>
                            <polygon ref={polygon => this.polyElement33 = polygon}
                                     points="346.74 739.793 355.644 718.342 367.75 718.342 390.944 729.067 346.74 739.793"
                                     style={{fill: "#67748a"}}/>
                            <polygon ref={polygon => this.polyElement34 = polygon}
                                     points="367.75 718.342 372.524 704.041 397.4 695.769 420.565 707.056 390.945 729.068 367.75 718.342"
                                     style={{fill: "#6e7a96"}}/>
                            <polygon ref={polygon => this.polyElement35 = polygon}
                                     points="397.4 695.769 397.4 689.024 409.29 689.024 498.744 644.698 474.614 711.191 420.564 707.055 397.4 695.769"
                                     style={{fill: "#687f95"}}/>
                            <polygon ref={polygon => this.polyElement36 = polygon}
                                     points="346.74 739.793 390.944 729.067 420.564 707.056 474.614 711.192 404.037 764.104 346.74 739.793"
                                     style={{fill: "#848e9f"}}/>
                            <polygon ref={polygon => this.polyElement37 = polygon}
                                     points="416.991 770.387 433.642 764.104 455.311 756.163 486.197 773.399 437.939 777.69 416.991 770.387"
                                     style={{fill: "#6e7a8a"}}/>
                            <polygon ref={polygon => this.polyElement38 = polygon}
                                     points="437.939 777.69 446.056 798.314 474.614 792.232 486.197 798.314 498.744 788.002 486.197 773.4 437.939 777.69"
                                     style={{fill: "#7a859a"}}/>
                            <polygon ref={polygon => this.polyElement39 = polygon}
                                     points="474.615 711.191 455.311 756.163 433.642 764.104 404.038 764.104 474.615 711.191"
                                     style={{fill: "#8d8ea2"}}/>
                            <polygon ref={polygon => this.polyElement40 = polygon}
                                     points="490.654 666.993 541.213 756.163 519.978 766.926 474.615 711.191 490.654 666.993"
                                     style={{fill: "#677a8e"}}/>
                            <polygon ref={polygon => this.polyElement41 = polygon}
                                     points="474.615 711.191 455.311 756.163 486.198 773.399 507.914 752.103 474.615 711.191"
                                     style={{fill: "#6d748c"}}/>
                            <polygon ref={polygon => this.polyElement42 = polygon}
                                     points="507.914 752.103 486.197 773.399 498.744 788.001 519.979 766.926 507.914 752.103"
                                     style={{fill: "#7d899e"}}/>
                            <polygon ref={polygon => this.polyElement43 = polygon}
                                     points="498.744 644.699 685.026 820.154 660.895 818.761 640.627 798.274 620.358 796.423 607.81 785.857 579.447 780.153 558.586 759.099 541.213 756.163 490.654 666.994 498.744 644.699"
                                     style={{fill: "#69778a"}}/>
                            <polygon ref={polygon => this.polyElement44 = polygon}
                                     points="207.466 780.96 257.929 764.104 292.308 739.792 307.348 764.104 318.092 759.098 346.74 772.532 404.038 764.104 386.269 781.98 335.833 820.513 325.02 820.513 264.377 806.028 207.466 780.96"
                                     style={{fill: "#fffffc"}}/>
                            <polygon ref={polygon => this.polyElement45 = polygon}
                                     points="264.377 806.029 297.56 830.842 334.803 844.465 341.488 830.842 325.02 820.514 264.377 806.029"
                                     style={{fill: "#d4cbcc"}}/>
                            <polygon ref={polygon => this.polyElement46 = polygon}
                                     points="386.269 781.98 404.038 764.104 434.619 764.104 386.269 781.98"
                                     style={{fill: "#f7f0ee"}}/>
                            <polygon ref={polygon => this.polyElement47 = polygon}
                                     points="541.213 756.163 558.586 759.099 579.447 780.153 565.313 798.314 543.299 795.451 541.213 756.163"
                                     style={{fill: "#5f6773"}}/>
                            <polygon ref={polygon => this.polyElement48 = polygon}
                                     points="486.197 798.314 498.744 788.002 519.978 766.926 541.213 756.163 542.128 773.399 535.822 780.153 486.197 798.314"
                                     style={{fill: "#edeae7"}}/>
                            <polygon ref={polygon => this.polyElement49 = polygon}
                                     points="543.299 795.451 542.128 773.399 535.822 780.153 500.489 806.029 514.163 814.557 543.299 795.451"
                                     style={{fill: "#54546c"}}/>
                            <polygon ref={polygon => this.polyElement50 = polygon}
                                     points="486.197 798.314 535.822 780.153 500.489 806.028 486.197 798.314"
                                     style={{fill: "#5c5f71"}}/>
                            <polygon ref={polygon => this.polyElement51 = polygon}
                                     points="565.313 798.314 607.81 785.857 620.358 796.423 567.694 824.913 539.403 824.913 514.163 814.557 532.485 802.543 549.072 809.414 565.313 798.314"
                                     style={{fill: "#65626e"}}/>
                            <polygon ref={polygon => this.polyElement52 = polygon}
                                     points="543.299 795.451 532.485 802.543 549.072 809.414 565.313 798.314 543.299 795.451"
                                     style={{fill: "#737e8c"}}/>
                            <polygon ref={polygon => this.polyElement53 = polygon}
                                     points="579.448 780.153 607.811 785.857 565.313 798.314 579.448 780.153"
                                     style={{fill: "#8f8a94"}}/>
                            <polygon ref={polygon => this.polyElement54 = polygon}
                                     points="474.615 792.232 459.584 828.989 525.489 838.064 535.822 823.444 514.163 814.557 500.489 806.029 486.198 798.314 474.615 792.232"
                                     style={{fill: "#6e778a"}}/>
                            <polygon ref={polygon => this.polyElement55 = polygon}
                                     points="446.056 798.314 474.615 792.232 459.584 828.989 425.047 839.208 446.056 798.314"
                                     style={{fill: "#777c90"}}/>
                            <polygon ref={polygon => this.polyElement56 = polygon}
                                     points="731.751 819.913 712.322 848.055 745.109 870.692 745.109 856.101 731.751 819.913"
                                     style={{fill: "#3b404b"}}/>
                            <polygon ref={polygon => this.polyElement57 = polygon}
                                     points="583.155 834.661 647.359 851.073 688.643 841.511 660.895 818.761 583.155 834.661"
                                     style={{fill: "#7a7c8f"}}/>
                            <polygon ref={polygon => this.polyElement58 = polygon}
                                     points="660.896 818.761 685.026 820.153 721.393 834.918 712.323 848.055 688.644 841.511 660.896 818.761"
                                     style={{fill: "#6e728a"}}/>
                            <polygon ref={polygon => this.polyElement59 = polygon}
                                     points="535.822 823.444 583.155 834.661 647.359 851.073 624.893 866.846 600.15 860.634 587.84 866.846 532.485 853.503 525.489 838.065 535.822 823.444"
                                     style={{fill: "#fffef7"}}/>
                            <polygon ref={polygon => this.polyElement60 = polygon}
                                     points="691.143 853.503 681.965 863.815 721.392 880.181 712.322 848.055 691.143 853.503"
                                     style={{fill: "#65625f"}}/>
                            <polygon ref={polygon => this.polyElement61 = polygon}
                                     points="647.359 851.073 681.966 863.815 691.143 853.503 712.322 848.055 688.644 841.511 647.359 851.073"
                                     style={{fill: "#656879"}}/>
                            <polygon ref={polygon => this.polyElement62 = polygon}
                                     points="721.392 880.181 745.108 908.669 717.787 891.698 721.392 880.181"
                                     style={{fill: "#5a5a72"}}/>
                            <polygon ref={polygon => this.polyElement63 = polygon}
                                     points="775.466 888.667 767.573 899.588 793.68 908.67 775.466 888.667"
                                     style={{fill: "#4b5159"}}/>
                            <polygon ref={polygon => this.polyElement64 = polygon}
                                     points="712.322 848.055 745.109 870.692 745.109 856.101 764.537 853.503 775.465 888.667 767.573 899.588 793.68 908.67 814.93 940.795 767.573 924.43 745.109 908.67 721.392 880.181 712.322 848.055"
                                     style={{fill: "#5f687e"}}/>
                            <polygon ref={polygon => this.polyElement65 = polygon}
                                     points="764.537 853.503 793.68 880.181 887.168 903.283 898.937 922.508 911.774 912.896 988.443 946.718 1067.253 1005.816 924.969 971.281 878.61 967.366 814.93 940.795 793.68 908.67 775.465 888.667 764.537 853.503"
                                     style={{fill: "#646a7e"}}/>
                            <polygon ref={polygon => this.polyElement66 = polygon}
                                     points="887.169 903.283 902.503 899.588 911.775 912.895 898.938 922.508 887.169 903.283"
                                     style={{fill: "#554f56"}}/>
                            <polygon ref={polygon => this.polyElement67 = polygon}
                                     points="454.353 852.662 444.9 866.846 468.532 878.917 472.502 865.789 459.583 828.99 454.353 852.662"
                                     style={{fill: "#464355"}}/>
                            <polygon ref={polygon => this.polyElement68 = polygon}
                                     points="525.489 838.064 521.893 889.108 565.313 898.356 532.484 853.503 525.489 838.064"
                                     style={{fill: "#515c69"}}/>
                            <polygon ref={polygon => this.polyElement69 = polygon}
                                     points="459.584 828.989 525.489 838.064 521.894 889.108 565.313 898.356 615.322 944.293 583.155 957.879 644.329 1011.864 591.687 997.206 563.755 1002.211 486.197 965.744 442.356 954.303 404.038 914.261 388.639 890.665 399.024 875.292 400.815 848.055 425.048 839.208 456.015 845.144 454.71 853.503 444.901 866.846 468.533 878.916 472.503 865.79 459.584 828.989"
                                     style={{fill: "#5f647e"}}/>
                            <polygon ref={polygon => this.polyElement70 = polygon}
                                     points="425.047 839.208 459.583 828.989 456.014 845.145 425.047 839.208"
                                     style={{fill: "#e8e6ee"}}/>
                            <polygon ref={polygon => this.polyElement71 = polygon}
                                     points="532.485 853.503 565.313 898.356 615.322 944.293 681.965 988.792 725.974 988.792 740.562 998.988 784.333 998.988 793.68 977.625 763.627 965.001 767.573 944.123 767.573 924.43 745.109 908.67 717.787 891.698 647.359 851.073 624.893 866.846 600.15 860.634 587.84 866.846 532.485 853.503"
                                     style={{fill: "#63637e"}}/>
                            <polygon ref={polygon => this.polyElement72 = polygon}
                                     points="681.965 863.815 647.358 851.073 717.787 891.697 721.392 880.181 681.965 863.815"
                                     style={{fill: "#5a5c7e"}}/>
                            <polygon ref={polygon => this.polyElement73 = polygon}
                                     points="341.488 830.841 334.804 844.464 328.835 853.503 318.091 860.634 335.833 866.846 356.827 870.692 400.815 848.055 425.047 839.208 378.97 841.511 341.488 830.841"
                                     style={{fill: "#fffcfa"}}/>
                            <polygon ref={polygon => this.polyElement74 = polygon}
                                     points="215.11 844.464 185.926 860.633 230.73 863.542 251.756 855.288 215.11 844.464"
                                     style={{fill: "#737a8e"}}/>
                            <polygon ref={polygon => this.polyElement75 = polygon}
                                     points="303.917 870.692 318.092 874.478 335.833 866.846 318.092 860.634 303.917 870.692"
                                     style={{fill: "#737789"}}/>
                            <polygon ref={polygon => this.polyElement76 = polygon}
                                     points="185.926 860.634 173.433 867.555 188.518 870.692 251.756 871.385 230.73 863.543 185.926 860.634"
                                     style={{fill: "#f7f2f0"}}/>
                            <polygon ref={polygon => this.polyElement77 = polygon}
                                     points="230.73 863.543 251.756 855.288 303.916 870.692 318.091 874.478 335.833 866.846 356.826 870.692 331.205 883.895 276.869 896.53 253.631 896.53 246.388 911.964 224.741 915.052 202.654 901.821 228.718 886.853 224.741 871.385 251.756 871.385 230.73 863.543"
                                     style={{fill: "#fffffc"}}/>
                            <polygon ref={polygon => this.polyElement78 = polygon}
                                     points="173.433 867.555 188.518 870.692 191.169 894.425 150.071 880.5 173.433 867.555"
                                     style={{fill: "#e2e0dc"}}/>
                            <polygon ref={polygon => this.polyElement79 = polygon}
                                     points="224.742 871.385 188.519 870.692 191.169 894.425 202.655 901.822 228.718 886.853 224.742 871.385"
                                     style={{fill: "#737789"}}/>
                            <polygon ref={polygon => this.polyElement80 = polygon}
                                     points="22.481 877.841 0 884.697 0 929.859 17.759 938.598 52.103 947.688 106.221 977.235 156.305 970.132 136.669 957.632 163.988 948.257 192.16 977.235 198.421 963.598 220.048 961.894 188.518 934.621 200.128 936.893 228.718 930.928 224.742 915.052 202.655 901.822 191.168 894.425 150.07 880.501 119.259 903.278 101.794 889.95 81.726 877.841 22.481 877.841"
                                     style={{fill: "#6a6f80"}}/>
                            <polygon ref={polygon => this.polyElement81 = polygon}
                                     points="101.794 889.95 119.26 903.277 150.071 880.499 125.853 879.557 101.794 889.95"
                                     style={{fill: "#51545c"}}/>
                            <polygon ref={polygon => this.polyElement82 = polygon}
                                     points="253.632 896.53 246.388 911.965 427.315 988.626 441.281 977.235 276.869 896.53 253.632 896.53"
                                     style={{fill: "#6a6879"}}/>
                            <polygon ref={polygon => this.polyElement83 = polygon}
                                     points="228.718 930.927 396.159 1031.17 371.569 1034.746 228.718 930.927"
                                     style={{fill: "#686a80"}}/>
                            <polygon ref={polygon => this.polyElement84 = polygon}
                                     points="156.305 970.132 192.161 977.235 163.988 948.256 136.67 957.631 156.305 970.132"
                                     style={{fill: "#c3bcb9"}}/>
                            <polygon ref={polygon => this.polyElement85 = polygon}
                                     points="400.815 848.055 399.024 875.292 388.639 890.665 404.038 914.261 442.356 954.303 441.281 977.235 276.869 896.529 331.205 883.895 356.827 870.692 400.815 848.055"
                                     style={{fill: "#dfdae2"}}/>
                            <polygon ref={polygon => this.polyElement86 = polygon}
                                     points="224.742 915.052 228.718 930.927 396.16 1031.17 427.315 988.625 246.388 911.964 224.742 915.052"
                                     style={{fill: "#d8d1cc"}}/>
                            <polygon ref={polygon => this.polyElement87 = polygon}
                                     points="0 1020.785 28.021 1039.87 125.852 1050.358 99.315 988.626 17.759 938.598 0 929.859 0 1020.785"
                                     style={{fill: "#626879"}}/>
                            <polygon ref={polygon => this.polyElement88 = polygon}
                                     points="17.759 938.598 52.103 947.688 106.22 977.235 99.315 988.625 17.759 938.598"
                                     style={{fill: "#e1dada"}}/>
                            <polygon ref={polygon => this.polyElement89 = polygon}
                                     points="99.315 988.625 106.22 977.235 156.305 970.132 192.16 977.235 198.421 963.597 220.048 961.893 188.519 934.62 200.128 936.892 228.718 930.926 371.57 1034.745 486.197 1069.424 335.833 1069.424 334.804 1085.87 246.388 1067.279 212.595 1085.87 125.853 1050.357 99.315 988.625"
                                     style={{fill: "#e8e5db"}}/>
                            <polygon ref={polygon => this.polyElement90 = polygon}
                                     points="0 1149.427 17.759 1152.368 38.283 1112.326 106.221 1158.089 136.669 1163.809 178.36 1195.27 514.163 1215.616 414.222 1188.008 371.569 1142.415 334.804 1085.87 303.917 1103.243 242.484 1097.464 212.595 1085.87 125.852 1050.357 28.021 1039.869 0 1020.784 0 1149.427"
                                     style={{fill: "#ebe4df"}}/>
                            <polygon ref={polygon => this.polyElement91 = polygon}
                                     points="246.388 1067.279 212.595 1085.87 242.484 1097.464 303.917 1103.243 334.804 1085.87 246.388 1067.279"
                                     style={{fill: "#6d6379"}}/>
                            <polygon ref={polygon => this.polyElement92 = polygon}
                                     points="136.669 1163.809 224.741 1318.905 235.921 1318.905 178.359 1195.271 136.669 1163.809"
                                     style={{fill: "#4e5467"}}/>
                            <polygon ref={polygon => this.polyElement93 = polygon}
                                     points="106.22 1158.089 136.669 1163.809 48.793 1238.173 136.768 1318.905 73.475 1350.184 10.182 1318.905 52.103 1272.495 10.182 1229.593 106.22 1158.089"
                                     style={{fill: "#ebe4df"}}/>
                            <polygon ref={polygon => this.polyElement94 = polygon}
                                     points="346.099 1103.243 388.638 1099.391 403.93 1112.326 469.538 1110.715 506.201 1105.859 554.442 1132.347 660.895 1132.347 660.895 1215.615 745.108 1241.357 767.573 1163.809 814.93 1132.347 608.471 1091.043 486.197 1069.424 335.833 1069.424 334.803 1085.87 346.099 1103.243"
                                     style={{fill: "#dfd6cd"}}/>
                            <polygon ref={polygon => this.polyElement95 = polygon}
                                     points="356.827 1119.741 403.931 1112.327 388.639 1099.392 346.1 1103.243 356.827 1119.741"
                                     style={{fill: "#595f6c"}}/>
                            <polygon ref={polygon => this.polyElement96 = polygon}
                                     points="356.827 1119.741 371.57 1142.415 458.701 1142.415 469.538 1110.715 403.931 1112.327 356.827 1119.741"
                                     style={{fill: "#e6dfd4"}}/>
                            <polygon ref={polygon => this.polyElement97 = polygon}
                                     points="371.569 1142.415 414.222 1188.009 519.448 1180.878 511.009 1132.347 554.442 1132.347 506.201 1105.859 469.538 1110.715 458.701 1142.415 371.569 1142.415"
                                     style={{fill: "#505c73"}}/>
                            <polygon ref={polygon => this.polyElement98 = polygon}
                                     points="414.222 1188.009 519.448 1180.878 525.488 1215.616 763.627 1318.905 688.643 1358.474 688.643 1318.905 514.162 1215.616 414.222 1188.009"
                                     style={{fill: "#d6cac7"}}/>
                            <polygon ref={polygon => this.polyElement99 = polygon}
                                     points="396.159 1031.17 499.56 1055.389 524.217 1031.17 634.25 1058.572 563.754 1002.211 486.197 965.744 442.77 954.412 441.281 977.235 427.314 988.625 396.159 1031.17"
                                     style={{fill: "#84808a"}}/>
                            <polygon ref={polygon => this.polyElement100 = polygon}
                                     points="396.159 1031.17 486.197 1069.424 371.569 1034.745 396.159 1031.17"
                                     style={{fill: "#c0b7b4"}}/>
                            <polygon ref={polygon => this.polyElement101 = polygon}
                                     points="499.56 1055.389 396.159 1031.17 486.197 1069.424 814.93 1132.348 634.25 1058.572 524.217 1031.17 499.56 1055.389"
                                     style={{fill: "#e4dede"}}/>
                            <polygon ref={polygon => this.polyElement102 = polygon}
                                     points="563.754 1002.211 634.25 1058.572 814.93 1132.348 915.896 1180.97 954.093 1146.648 915.896 1155.391 808.647 1112.327 780.625 1076.371 926.485 1081.759 875.309 1053.627 931.985 1045.785 906.06 1015.981 784.332 998.988 740.562 998.988 725.973 988.791 681.965 988.791 615.322 944.293 583.155 957.879 644.329 1011.864 591.686 997.206 563.754 1002.211"
                                     style={{fill: "#e6dfda"}}/>
                            <polygon ref={polygon => this.polyElement103 = polygon}
                                     points="915.896 1257.088 999.931 1257.088 1067.253 1318.905 968.418 1318.905 915.896 1257.088"
                                     style={{fill: "#c9b8b4"}}/>
                            <polygon ref={polygon => this.polyElement104 = polygon}
                                     points="780.626 1076.371 808.648 1112.327 915.896 1155.391 954.093 1146.648 1031.445 1132.348 926.486 1081.759 780.626 1076.371"
                                     style={{fill: "#5a5c78"}}/>
                            <polygon ref={polygon => this.polyElement105 = polygon}
                                     points="931.986 1045.785 875.31 1053.627 926.486 1081.759 1019.269 1095.166 931.986 1045.785"
                                     style={{fill: "#5b6579"}}/>
                            <polygon ref={polygon => this.polyElement106 = polygon}
                                     points="1153.918 1095.165 1107.364 1099.391 1078.716 1081.76 931.986 1045.786 1019.269 1095.165 926.485 1081.76 1031.445 1132.349 1173.778 1146.649 1190.552 1143.341 1190.552 1068.584 1072.986 1034.745 1153.918 1095.165"
                                     style={{fill: "#dcd4d0"}}/>
                            <polygon ref={polygon => this.polyElement107 = polygon}
                                     points="928.95 982.835 906.06 1015.981 931.985 1045.785 1078.715 1081.759 1107.364 1099.392 1153.918 1095.166 1072.985 1034.745 954.093 982.835 928.95 982.835"
                                     style={{fill: "#5e647a"}}/>
                            <polygon ref={polygon => this.polyElement108 = polygon}
                                     points="1072.985 1034.745 1190.551 1068.584 1190.551 1049.834 1153.917 1027.852 991.574 999.2 1072.985 1034.745"
                                     style={{fill: "#686876"}}/>
                            <polygon ref={polygon => this.polyElement109 = polygon}
                                     points="793.68 977.625 928.95 982.835 906.06 1015.981 784.333 998.988 793.68 977.625"
                                     style={{fill: "#8d8c9c"}}/>
                            <polygon ref={polygon => this.polyElement110 = polygon}
                                     points="767.573 924.43 793.68 946.049 812.366 946.049 838.763 969.107 878.611 967.366 814.93 940.795 767.573 924.43"
                                     style={{fill: "#e4d7d6"}}/>
                            <polygon ref={polygon => this.polyElement111 = polygon}
                                     points="793.68 977.625 763.627 965.001 767.573 944.123 767.573 924.43 793.68 946.049 812.366 946.049 838.763 969.107 878.611 967.366 928.95 982.835 793.68 977.625"
                                     style={{fill: "#626c82"}}/>
                            <polygon ref={polygon => this.polyElement112 = polygon}
                                     points="878.611 967.366 928.951 982.836 954.094 982.836 991.575 999.2 1153.919 1027.852 1067.253 1005.816 924.969 971.282 878.611 967.366"
                                     style={{fill: "#dfdbd6"}}/>
                            <polygon ref={polygon => this.polyElement113 = polygon}
                                     points="1067.253 1005.815 1153.918 1027.851 1190.551 1049.833 1190.551 1012.069 1125.985 977.235 988.444 946.717 1067.253 1005.815"
                                     style={{fill: "#737c8e"}}/>
                            <polygon ref={polygon => this.polyElement114 = polygon}
                                     points="991.574 891.698 1078.199 966.633 1125.985 977.235 1190.551 951.914 1190.551 895.313 1181.85 891.698 991.574 891.698"
                                     style={{fill: "#8c94a8"}}/>
                            <polygon ref={polygon => this.polyElement115 = polygon}
                                     points="1125.985 977.235 1190.551 1012.069 1190.551 951.914 1125.985 977.235"
                                     style={{fill: "#8e94a1"}}/>
                            <polygon ref={polygon => this.polyElement116 = polygon}
                                     points="976.296 920.426 988.444 946.718 1078.199 966.632 1031.445 926.188 976.296 920.426"
                                     style={{fill: "#8a95ad"}}/>
                            <polygon ref={polygon => this.polyElement117 = polygon}
                                     points="605.509 745.259 663.082 752.664 701.679 773.4 721.392 802.433 628.515 766.927 605.509 745.259"
                                     style={{fill: "#72859c"}}/>
                            <polygon ref={polygon => this.polyElement118 = polygon}
                                     points="658.8 795.451 731.751 819.913 721.392 834.918 685.026 820.153 658.8 795.451"
                                     style={{fill: "#8291a9"}}/>
                            <polygon ref={polygon => this.polyElement119 = polygon}
                                     points="628.515 766.926 658.8 795.451 731.751 819.913 721.393 802.432 628.515 766.926"
                                     style={{fill: "#dfe1df"}}/>
                            <polygon ref={polygon => this.polyElement120 = polygon}
                                     points="721.392 802.432 777.187 793.42 837.349 841.51 764.537 853.503 721.392 802.432"
                                     style={{fill: "#6f7c94"}}/>
                            <polygon ref={polygon => this.polyElement121 = polygon}
                                     points="721.392 802.432 731.751 819.913 745.108 856.1 764.537 853.503 721.392 802.432"
                                     style={{fill: "#a09fb3"}}/>
                            <polygon ref={polygon => this.polyElement122 = polygon}
                                     points="764.537 853.503 814.93 860.634 887.168 903.283 793.68 880.181 764.537 853.503"
                                     style={{fill: "#d8d1d3"}}/>
                            <polygon ref={polygon => this.polyElement123 = polygon}
                                     points="837.35 841.511 862.418 870.692 899.472 877.841 976.296 920.426 988.444 946.718 911.775 912.896 902.503 899.588 887.169 903.283 814.93 860.634 764.538 853.503 837.35 841.511"
                                     style={{fill: "#808998"}}/>
                            <polygon ref={polygon => this.polyElement124 = polygon}
                                     points="837.35 841.511 862.418 870.692 899.472 877.84 881.397 862.063 960.181 885.302 976.296 920.426 1031.445 926.188 991.574 891.698 1181.85 891.698 1190.551 895.313 1190.551 853.345 1088.546 861.706 1039.324 845.144 1019.269 850.766 962.329 830.841 837.35 841.511"
                                     style={{fill: "#f5f0ee"}}/>
                            <polygon ref={polygon => this.polyElement125 = polygon}
                                     points="881.397 862.064 899.472 877.841 976.296 920.426 960.181 885.303 881.397 862.064"
                                     style={{fill: "#8a95ad"}}/>
                            <polygon ref={polygon => this.polyElement126 = polygon}
                                     points="982.972 838.064 999.932 833.408 1019.27 850.766 982.972 838.064"
                                     style={{fill: "#7a8194"}}/>
                            <polygon ref={polygon => this.polyElement127 = polygon}
                                     points="1019.269 850.766 1038.607 815.542 1046.478 820.514 1050.604 810.119 1067.253 822.449 1088.546 796.423 1106.648 798.314 1116.675 802.433 1069.47 855.288 1039.323 845.145 1019.269 850.766"
                                     style={{fill: "#767e99"}}/>
                            <polygon ref={polygon => this.polyElement128 = polygon}
                                     points="1116.675 802.432 1153.918 814.871 1087.663 834.917 1116.675 802.432"
                                     style={{fill: "#828da3"}}/>
                            <polygon ref={polygon => this.polyElement129 = polygon}
                                     points="1087.663 834.918 1069.469 855.288 1088.547 861.707 1190.552 853.345 1190.552 845.661 1153.917 814.871 1087.663 834.918"
                                     style={{fill: "#8e99aa"}}/>
                            <polygon ref={polygon => this.polyElement130 = polygon}
                                     points="1136.357 785.857 1116.675 802.432 1153.918 814.871 1190.551 783.129 1190.551 782.072 1136.357 785.857"
                                     style={{fill: "#a4a6b3"}}/>
                            <polygon ref={polygon => this.polyElement131 = polygon}
                                     points="1175.404 759.814 1168.958 772.533 1158.931 772.533 1136.357 785.857 1190.551 782.073 1190.551 755.201 1175.404 759.814"
                                     style={{fill: "#737f98"}}/>
                            <polygon ref={polygon => this.polyElement132 = polygon}
                                     points="1153.918 814.871 1190.552 845.66 1190.552 783.129 1153.918 814.871"
                                     style={{fill: "#838aa3"}}/>
                            <polygon ref={polygon => this.polyElement133 = polygon}
                                     points="620.358 796.423 567.694 824.913 542.128 824.938 583.155 834.661 660.896 818.761 640.627 798.274 620.358 796.423"
                                     style={{fill: "#7a818e"}}/>
                        </g>
                        <polygon ref={polygon => this.polyElement = polygon}
                                 points="0 1149.427 17.759 1152.368 38.283 1112.326 106.22 1158.089 10.182 1229.593 52.103 1272.495 10.182 1318.905 73.475 1350.184 136.768 1318.905 48.793 1238.173 136.669 1163.809 224.741 1318.905 235.921 1318.905 178.359 1195.271 514.162 1215.616 688.643 1318.905 688.643 1358.474 763.627 1318.905 525.488 1215.616 511.009 1132.347 660.895 1132.347 660.895 1215.615 745.108 1241.357 767.573 1163.809 814.93 1132.348 915.896 1180.97 954.093 1146.648 1031.445 1132.349 1173.778 1146.649 1190.552 1143.341 1190.866 1683.78 0.314 1683.78 0 1149.427"
                                 style={{fill: "#202c3e"}}/>
                    </g>
                </svg>
                <DateField>
                    <Titel2White>10.-16. February 2019</Titel2White>
                </DateField>
            </Container>
        )
    }
}

export default Mountain;