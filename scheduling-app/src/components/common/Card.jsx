import React, { Component } from "react";

class Card extends Component {
  state = {
    styles: {
      parentDiv: "card",
      header: "card-header text-white p-3 border text-center fs-3 ",
      body: "card-body text-wrap",
      footer: "card-footer",
    },
  };
  render() {
    const { content } = this.props;
    const { styles } = this.state;
    return (
      <div className={styles.parentDiv}>
        <div className={styles.header}>
          {content.header && content.header.map((head) => head.render)}
        </div>
        <div className={styles.body}>
          {content.body && content.body.map((cont) => cont.render)}
        </div>
        <div className={styles.footer}>
          {content.footer && content.footer.map((f) => f.render)}
        </div>
      </div>
    );
  }
}

export default Card;
