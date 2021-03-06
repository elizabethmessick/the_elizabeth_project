import React, { Component } from 'react';
import socket from '../../utils/socket';
import './LiveChat.css';
import avatar from '../../img/avatar.png'

class LiveChat extends Component {
    state = {
        chats: [],
        from: '',
        msg: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    sendChat = () => {
        socket.emit('chat', { from: this.state.from, msg: this.state.msg });
        this.setState({ msg: '' });
    }

    componentDidMount() {
        socket.on('chat', (chat) => {
            const newChats = [...this.state.chats];
            newChats.push(chat);
            this.setState({ chats: newChats });
        });
    }

    render() {
        return (
            <div className="LiveChat">
                <main>
                    <section>
                        <input className='form-control' type="text" placeholder="name" name='from' value={this.state.from} onChange={this.handleChange} /><br />
                        <textarea className='form-control' type="text" placeholder="message" name='msg' value={this.state.msg} onChange={this.handleChange} /><br />
                        <button className='btn btn-default' onClick={this.sendChat}>Send Chat</button>
                    </section>
                    <hr />
                    <section>
                        {this.state.chats.map((c, i) =>
                            <article className='panel panel-default' key={i}>
                                <div className='panel-heading panel-title'> <img className="live-chat-avatar" src={avatar} alt="avatar" /> &nbsp;  {c.from}</div>
                                <div className='panel-body'>{c.msg}</div>
                            </article>
                        )}
                    </section>
                </main>
            </div>
        );
    }
}

export default LiveChat;