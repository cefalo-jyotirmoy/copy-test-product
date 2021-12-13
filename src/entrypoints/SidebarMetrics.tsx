import React, {useState} from 'react';
import {RenderItemFormSidebarPanelCtx} from 'datocms-plugin-sdk';
import {Canvas, Button, Spinner} from 'datocms-react-ui';
import client from '../utils/client'

type PropTypes = {
    ctx: RenderItemFormSidebarPanelCtx;
};

const quickCopy = async (ctxProp: any, setShowBtn: any, setLoading: any, setMsg: any) => {
}

const SidebarMetrics = ({ctx}: PropTypes) => {
    const [showBtn, setShowBtn] = useState(true)
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState(false)

    return (
        <Canvas ctx={ctx}>
            {showBtn && (
                <div style={{marginBottom: 'var(--spacing-m)'}}>
                    <Button onClick={() => quickCopy(ctx, setShowBtn, setLoading, setMsg)}>Copy</Button>
                </div>
            )}
            {loading && (
                <>Creating...<Spinner size={24}/></>
            )}
            {msg && (
                <>Completed!!!</>
            )}
        </Canvas>
    );

}

export default SidebarMetrics;
