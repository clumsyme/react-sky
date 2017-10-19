import React, { Component } from 'react'
import stars from './sky.svg'


const styles = {
    container: {
        position: 'relative',
        backgroundColor: '#242829',
        overflow: 'hidden',
        padding: 40,
        boxSizing: 'border-box',
        color: '#e7ece4',
    },
    stars: {
        position: 'absolute',
        top: 0,
        left: 0,
        background: `url(${stars}) center/cover no-repeat`,
        width: '100%',
        height: '100%',
        zIndex: 2,
    },
    explore: {
        position: 'absolute',
        zIndex: 1,
        width: 420,
        height: 420,
        borderRadius: '50%',
        opacity: .4,
        transition: 'all 8s ease-out',
        transformOrigin: 'center',
    },
    children: {
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 3,
    }
}

export default class Sky extends Component {
    state = {
        exploreTop: 0,
        exploreLeft: 0,
        exploreScale: 1,
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.exploreNewPlace()
            this.it = setInterval(() => {
                this.exploreNewPlace();
            }, 8000)
        }, 0)
    }

    manuDiscover = (e) => {
        clearInterval(this.it)
        clearTimeout(this.to)
        this.explore.style.transition = 'all 1s ease-out'
        const exploreLeft = (e.clientX - 210) + 'px'
        const exploreTop = (e.clientY - 210) + 'px'
        let exploreScale = 0.5 + 0.5 * Math.random();
        this.setState({
            exploreTop,
            exploreLeft,
            exploreScale,
        }, () => {
            this.to = setTimeout(() => {
                this.explore.style.transition = 'all 8s ease-out'
                this.exploreNewPlace()
                this.it = setInterval(() => {
                    this.exploreNewPlace();
                }, 8000)
            }, 3000)
        });
    }

    exploreNewPlace() {
        const { clientWidth, clientHeight } = this.sky
        let exploreLeft = `${Math.random() * clientWidth - 210}px`;
        let exploreTop = `${Math.random() * clientHeight - 210}px`;
        let exploreScale = 0.5 + 0.5 * Math.random();
        this.setState({
            exploreTop,
            exploreLeft,
            exploreScale,
        });
    }

    render() {
        const width = this.props.width || '100%'
        const height = this.props.height || 'auto'
        // const starColor = this.props.starColor || "#ffffff"

        const { exploreTop, exploreLeft, exploreScale } = this.state
        return (
            <div
                onClick={this.manuDiscover}
                ref={sky => { this.sky = sky }}
                style={{
                    ...styles.container,
                    width,
                    height,
                }}
            >
                <div style={{ ...styles.stars }}></div>
                <div
                    ref={explore => { this.explore = explore }}
                    style={{
                        ...styles.explore,
                        top: exploreTop,
                        left: exploreLeft,
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 80%,rgba(255, 255, 255, 0) 100%)",
                        transform: `scale(${exploreScale})`,
                    }}
                />
                <div style={styles.children} className={this.props.className}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}