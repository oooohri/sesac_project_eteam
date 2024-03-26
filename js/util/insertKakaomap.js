import { KAKAO_MAP_API_KEY } from '../../config.js';

const script = document.createElement('script');

script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services`;
script.type = 'text/javascript';

document.head.appendChild(script);
