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
        <div key="header" className={styles.header}>
          {content.header && content.header.map((head) => head)}
        </div>
        <div key="body" className={styles.body}>
          {content.body && content.body.map((bod) => bod)}
        </div>
        <div key="footer" className={styles.footer}>
          {content.footer && content.footer.map((foot) => foot)}
        </div>
      </div>
    );
  }
}

export default Card;
