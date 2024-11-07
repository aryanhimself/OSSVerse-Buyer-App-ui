const Logo = ({ ...props }) => {
  return (
    <svg
      role="img"
      width="87"
      height="26"
      viewBox="0 0 87 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Ossverse logo</title>
      <circle cx="13" cy="13" r="13" fill="#DBDBDB" />
      <path
        d="M18.7045 13.1818C18.7045 14.4508 18.464 15.5303 17.983 16.4205C17.5057 17.3106 16.8542 17.9905 16.0284 18.4602C15.2064 18.9261 14.2822 19.1591 13.2557 19.1591C12.2216 19.1591 11.2936 18.9242 10.4716 18.4545C9.64962 17.9848 9 17.3049 8.52273 16.4148C8.04545 15.5246 7.80682 14.447 7.80682 13.1818C7.80682 11.9129 8.04545 10.8333 8.52273 9.94318C9 9.05303 9.64962 8.375 10.4716 7.90909C11.2936 7.43939 12.2216 7.20455 13.2557 7.20455C14.2822 7.20455 15.2064 7.43939 16.0284 7.90909C16.8542 8.375 17.5057 9.05303 17.983 9.94318C18.464 10.8333 18.7045 11.9129 18.7045 13.1818ZM16.2102 13.1818C16.2102 12.3598 16.0871 11.6667 15.8409 11.1023C15.5985 10.5379 15.2557 10.1098 14.8125 9.81818C14.3693 9.52652 13.8504 9.38068 13.2557 9.38068C12.661 9.38068 12.142 9.52652 11.6989 9.81818C11.2557 10.1098 10.911 10.5379 10.6648 11.1023C10.4223 11.6667 10.3011 12.3598 10.3011 13.1818C10.3011 14.0038 10.4223 14.697 10.6648 15.2614C10.911 15.8258 11.2557 16.2538 11.6989 16.5455C12.142 16.8371 12.661 16.983 13.2557 16.983C13.8504 16.983 14.3693 16.8371 14.8125 16.5455C15.2557 16.2538 15.5985 15.8258 15.8409 15.2614C16.0871 14.697 16.2102 14.0038 16.2102 13.1818ZM26.8395 10.7102C26.794 10.2519 26.599 9.89583 26.2543 9.64205C25.9096 9.38826 25.4418 9.26136 24.8509 9.26136C24.4493 9.26136 24.1103 9.31818 23.8338 9.43182C23.5573 9.54167 23.3452 9.69508 23.1974 9.89205C23.0535 10.089 22.9815 10.3125 22.9815 10.5625C22.974 10.7708 23.0175 10.9527 23.1122 11.108C23.2107 11.2633 23.3452 11.3977 23.5156 11.5114C23.6861 11.6212 23.883 11.7178 24.1065 11.8011C24.33 11.8807 24.5687 11.9489 24.8224 12.0057L25.8679 12.2557C26.3755 12.3693 26.8414 12.5208 27.2656 12.7102C27.6899 12.8996 28.0573 13.1326 28.3679 13.4091C28.6785 13.6856 28.919 14.0114 29.0895 14.3864C29.2637 14.7614 29.3527 15.1913 29.3565 15.6761C29.3527 16.3883 29.1709 17.0057 28.8111 17.5284C28.455 18.0473 27.9399 18.4508 27.2656 18.7386C26.5952 19.0227 25.7865 19.1648 24.8395 19.1648C23.9001 19.1648 23.0819 19.0208 22.3849 18.733C21.6918 18.4451 21.1501 18.0189 20.7599 17.4545C20.3736 16.8864 20.1709 16.1837 20.152 15.3466H22.5327C22.5592 15.7367 22.6709 16.0625 22.8679 16.3239C23.0687 16.5814 23.3357 16.7765 23.669 16.9091C24.0062 17.0379 24.3868 17.1023 24.8111 17.1023C25.2277 17.1023 25.5895 17.0417 25.8963 16.9205C26.2069 16.7992 26.4474 16.6307 26.6179 16.4148C26.7884 16.1989 26.8736 15.9508 26.8736 15.6705C26.8736 15.4091 26.7959 15.1894 26.6406 15.0114C26.4891 14.8333 26.2656 14.6818 25.9702 14.5568C25.6785 14.4318 25.3205 14.3182 24.8963 14.2159L23.6293 13.8977C22.6482 13.6591 21.8736 13.286 21.3054 12.7784C20.7372 12.2708 20.455 11.5871 20.4588 10.7273C20.455 10.0227 20.6425 9.4072 21.0213 8.88068C21.4039 8.35417 21.9285 7.94318 22.5952 7.64773C23.2618 7.35227 24.0194 7.20455 24.8679 7.20455C25.7315 7.20455 26.4853 7.35227 27.1293 7.64773C27.777 7.94318 28.2808 8.35417 28.6406 8.88068C29.0005 9.4072 29.1861 10.017 29.1974 10.7102H26.8395ZM37.3239 10.7102C37.2784 10.2519 37.0833 9.89583 36.7386 9.64205C36.3939 9.38826 35.9261 9.26136 35.3352 9.26136C34.9337 9.26136 34.5947 9.31818 34.3182 9.43182C34.0417 9.54167 33.8295 9.69508 33.6818 9.89205C33.5379 10.089 33.4659 10.3125 33.4659 10.5625C33.4583 10.7708 33.5019 10.9527 33.5966 11.108C33.6951 11.2633 33.8295 11.3977 34 11.5114C34.1705 11.6212 34.3674 11.7178 34.5909 11.8011C34.8144 11.8807 35.053 11.9489 35.3068 12.0057L36.3523 12.2557C36.8598 12.3693 37.3258 12.5208 37.75 12.7102C38.1742 12.8996 38.5417 13.1326 38.8523 13.4091C39.1629 13.6856 39.4034 14.0114 39.5739 14.3864C39.7481 14.7614 39.8371 15.1913 39.8409 15.6761C39.8371 16.3883 39.6553 17.0057 39.2955 17.5284C38.9394 18.0473 38.4242 18.4508 37.75 18.7386C37.0795 19.0227 36.2708 19.1648 35.3239 19.1648C34.3845 19.1648 33.5663 19.0208 32.8693 18.733C32.1761 18.4451 31.6345 18.0189 31.2443 17.4545C30.858 16.8864 30.6553 16.1837 30.6364 15.3466H33.017C33.0436 15.7367 33.1553 16.0625 33.3523 16.3239C33.553 16.5814 33.8201 16.7765 34.1534 16.9091C34.4905 17.0379 34.8712 17.1023 35.2955 17.1023C35.7121 17.1023 36.0739 17.0417 36.3807 16.9205C36.6913 16.7992 36.9318 16.6307 37.1023 16.4148C37.2727 16.1989 37.358 15.9508 37.358 15.6705C37.358 15.4091 37.2803 15.1894 37.125 15.0114C36.9735 14.8333 36.75 14.6818 36.4545 14.5568C36.1629 14.4318 35.8049 14.3182 35.3807 14.2159L34.1136 13.8977C33.1326 13.6591 32.358 13.286 31.7898 12.7784C31.2216 12.2708 30.9394 11.5871 30.9432 10.7273C30.9394 10.0227 31.1269 9.4072 31.5057 8.88068C31.8883 8.35417 32.4129 7.94318 33.0795 7.64773C33.7462 7.35227 34.5038 7.20455 35.3523 7.20455C36.2159 7.20455 36.9697 7.35227 37.6136 7.64773C38.2614 7.94318 38.7652 8.35417 39.125 8.88068C39.4848 9.4072 39.6705 10.017 39.6818 10.7102H37.3239ZM43.598 7.36364L46.4105 16.2045H46.5185L49.3366 7.36364H52.0639L48.0526 19H44.8821L40.8651 7.36364H43.598ZM56.4119 19.1705C55.5142 19.1705 54.7415 18.9886 54.0938 18.625C53.4498 18.2576 52.9536 17.7386 52.6051 17.0682C52.2566 16.3939 52.0824 15.5966 52.0824 14.6761C52.0824 13.7784 52.2566 12.9905 52.6051 12.3125C52.9536 11.6345 53.4441 11.1061 54.0767 10.7273C54.7131 10.3485 55.4593 10.1591 56.3153 10.1591C56.8911 10.1591 57.4271 10.2519 57.9233 10.4375C58.4233 10.6193 58.8589 10.8939 59.2301 11.2614C59.6051 11.6288 59.8968 12.0909 60.1051 12.6477C60.3134 13.2008 60.4176 13.8485 60.4176 14.5909V15.2557H53.0483V13.7557H58.1392C58.1392 13.4072 58.0634 13.0985 57.9119 12.8295C57.7604 12.5606 57.5502 12.3504 57.2812 12.1989C57.0161 12.0436 56.7074 11.9659 56.3551 11.9659C55.9877 11.9659 55.6619 12.0511 55.3778 12.2216C55.0975 12.3883 54.8778 12.6136 54.7188 12.8977C54.5597 13.178 54.4782 13.4905 54.4744 13.8352V15.2614C54.4744 15.6932 54.554 16.0663 54.7131 16.3807C54.8759 16.6951 55.1051 16.9375 55.4006 17.108C55.696 17.2784 56.0464 17.3636 56.4517 17.3636C56.7206 17.3636 56.9669 17.3258 57.1903 17.25C57.4138 17.1742 57.6051 17.0606 57.7642 16.9091C57.9233 16.7576 58.0445 16.572 58.1278 16.3523L60.3665 16.5C60.2528 17.0379 60.0199 17.5076 59.6676 17.9091C59.3191 18.3068 58.8684 18.6174 58.3153 18.8409C57.7661 19.0606 57.1316 19.1705 56.4119 19.1705ZM61.9972 19V10.2727H64.3438V11.7955H64.4347C64.5938 11.2538 64.8608 10.8447 65.2358 10.5682C65.6108 10.2879 66.0426 10.1477 66.5312 10.1477C66.6525 10.1477 66.7831 10.1553 66.9233 10.1705C67.0634 10.1856 67.1866 10.2064 67.2926 10.233V12.3807C67.179 12.3466 67.0218 12.3163 66.821 12.2898C66.6203 12.2633 66.4366 12.25 66.2699 12.25C65.9138 12.25 65.5956 12.3277 65.3153 12.483C65.0388 12.6345 64.8191 12.8466 64.6562 13.1193C64.4972 13.392 64.4176 13.7064 64.4176 14.0625V19H61.9972ZM75.8054 12.7614L73.5895 12.8977C73.5516 12.7083 73.4702 12.5379 73.3452 12.3864C73.2202 12.2311 73.0554 12.108 72.8509 12.017C72.6501 11.9223 72.4096 11.875 72.1293 11.875C71.7543 11.875 71.438 11.9545 71.1804 12.1136C70.9228 12.2689 70.794 12.4773 70.794 12.7386C70.794 12.947 70.8774 13.1231 71.044 13.267C71.2107 13.411 71.4967 13.5265 71.902 13.6136L73.4815 13.9318C74.33 14.1061 74.9626 14.3864 75.3793 14.7727C75.7959 15.1591 76.0043 15.6667 76.0043 16.2955C76.0043 16.8674 75.8357 17.3693 75.4986 17.8011C75.1652 18.233 74.7069 18.5701 74.1236 18.8125C73.544 19.0511 72.8755 19.1705 72.1179 19.1705C70.9626 19.1705 70.0421 18.9299 69.3565 18.4489C68.6747 17.964 68.2751 17.3049 68.1577 16.4716L70.5384 16.3466C70.6103 16.6989 70.7846 16.9678 71.0611 17.1534C71.3376 17.3352 71.6918 17.4261 72.1236 17.4261C72.5478 17.4261 72.8887 17.3447 73.1463 17.1818C73.4077 17.0152 73.5402 16.8011 73.544 16.5398C73.5402 16.3201 73.4474 16.1402 73.2656 16C73.0838 15.8561 72.8035 15.7462 72.4247 15.6705L70.9134 15.3693C70.0611 15.1989 69.4266 14.9034 69.0099 14.483C68.5971 14.0625 68.3906 13.5265 68.3906 12.875C68.3906 12.3144 68.5421 11.8314 68.8452 11.4261C69.152 11.0208 69.5819 10.7083 70.1349 10.4886C70.6918 10.2689 71.3433 10.1591 72.0895 10.1591C73.1918 10.1591 74.0592 10.392 74.6918 10.858C75.3281 11.3239 75.6993 11.9583 75.8054 12.7614ZM81.5057 19.1705C80.608 19.1705 79.8352 18.9886 79.1875 18.625C78.5436 18.2576 78.0473 17.7386 77.6989 17.0682C77.3504 16.3939 77.1761 15.5966 77.1761 14.6761C77.1761 13.7784 77.3504 12.9905 77.6989 12.3125C78.0473 11.6345 78.5379 11.1061 79.1705 10.7273C79.8068 10.3485 80.553 10.1591 81.4091 10.1591C81.9848 10.1591 82.5208 10.2519 83.017 10.4375C83.517 10.6193 83.9527 10.8939 84.3239 11.2614C84.6989 11.6288 84.9905 12.0909 85.1989 12.6477C85.4072 13.2008 85.5114 13.8485 85.5114 14.5909V15.2557H78.142V13.7557H83.233C83.233 13.4072 83.1572 13.0985 83.0057 12.8295C82.8542 12.5606 82.6439 12.3504 82.375 12.1989C82.1098 12.0436 81.8011 11.9659 81.4489 11.9659C81.0814 11.9659 80.7557 12.0511 80.4716 12.2216C80.1913 12.3883 79.9716 12.6136 79.8125 12.8977C79.6534 13.178 79.572 13.4905 79.5682 13.8352V15.2614C79.5682 15.6932 79.6477 16.0663 79.8068 16.3807C79.9697 16.6951 80.1989 16.9375 80.4943 17.108C80.7898 17.2784 81.1402 17.3636 81.5455 17.3636C81.8144 17.3636 82.0606 17.3258 82.2841 17.25C82.5076 17.1742 82.6989 17.0606 82.858 16.9091C83.017 16.7576 83.1383 16.572 83.2216 16.3523L85.4602 16.5C85.3466 17.0379 85.1136 17.5076 84.7614 17.9091C84.4129 18.3068 83.9621 18.6174 83.4091 18.8409C82.8598 19.0606 82.2254 19.1705 81.5057 19.1705Z"
        fill="black"
      />
    </svg>
  );
};

export default Logo;