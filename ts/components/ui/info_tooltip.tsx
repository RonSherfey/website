import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import { Icon } from 'ts/components/icon';

import { colors } from 'ts/style/colors';

interface InfoTooltipProps {
    children: React.ReactNode;
    className?: string;
}

export const InfoTooltip = (props: InfoTooltipProps) => {
    return (
        <Wrap className={props.className}>
            <div data-tip={true} data-for="walletBalance" data-type="light" data-border="true">
                <StyledIcon name="info" size={13} />

                <StyledTooltip id="walletBalance" className="tooltip-light">
                    {props.children}
                </StyledTooltip>
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    width: 14px;
    height: 14px;
    position: relative;

    > div {
        position: absolute;
        width: 30px;
        height: 30px;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const StyledIcon = styled(Icon)`
    opacity: 0.7;

    path {
        fill: ${colors.textDarkSecondary};
    }
`;

const StyledTooltip = styled(ReactTooltip)`
    &.tooltip-light.type-light.border {
        background-color: #f6f6f6;
        border: 1px solid ${colors.border};
        max-width: 390px;
        padding: 20px;
        font-size: 18px;
        color: ${colors.textDarkPrimary};
        line-height: 1.5;

        &.place-left {
            &:before {
                border-left-color: ${colors.border};
            }
            &:after {
                border-left-color: #f6f6f6;
            }
        }

       &.place-top {
            &:before {
                border-top-color: ${colors.border};
            }
            &:after {
                border-top-color: #f6f6f6;
            }
        }
    }
`;
