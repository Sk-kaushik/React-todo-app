import React, { useState, useEffect } from "react";

var Clock = () => {
  var [hour, setHour] = useState("00");
  var [minutes, setMinutes] = useState("00");
  var [second, setSecond] = useState("00");

  useEffect(() => {
    let isMounted = true;
    if (isMounted) showTime();
    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="clock">
      <h3 className="hour">{hour} </h3>
      {"\u00A0"}
      <span> :</span>
      {"\u00A0"}
      <h3 className="minute">{minutes}</h3>
      <span> :</span>
      {"\u00A0"}
      <h3 className="seconds">{second}</h3>
    </div>
  );

  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    // var session = "AM";

    if (h === 0) {
      h = 12;
    }

    // if (h > 12) {
    //   h = h - 12;
    //   session = "PM";
    // }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // var time = h + ":" + m + ":" + s + " " + session;

    setHour(h);
    setMinutes(m);
    setSecond(s);
    setTimeout(showTime, 1000);
  }
};

export default Clock;
