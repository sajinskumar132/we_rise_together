import React from "react";
import "./eventsStyle.css";
import { event_helper } from "./event_helper";
import CustomCardV1 from "../../../../custom_components/custom_card_v1/CustomCardV1";
import CommonHelper from "../../../../helpers/commonHelper";
function Events() {
  return (
    <div id="events" className="events_main_container">
      <p className="events_headline">Upcoming Events</p>
      <p className="events_sub_headline">Healing Through Attending Events</p>
      <div className="events_list_main_container">
        {event_helper.map((item) => (
          <CustomCardV1
            image={item.img}
            title={item.title}
            date={item.date}
            time={item.time}
            mode={item.mode}
            action={
              <div>
                <button
                  className="event_action_button"
                  onClick={() => {
                    CommonHelper.Alert();
                  }}
                >
                  Register
                </button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
