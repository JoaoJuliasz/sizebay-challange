import { useState, useEffect, useRef } from 'react'

//Importing libs
//@ts-ignore
import Tooltip from "reactjs-mappletooltip"
import { toast } from 'react-toastify';

import { Items } from '../../utils/types'

//Importing style-components 
import { ItemButton, ItemComponentsContainer, ItemContainer, ItemInput, MinusIcon, CheckIcon } from './Item.styles'

type ItemProps = {
    idx: number
    item: Items
    changeItemValue: (index: number, value: string) => void
    changeItemStatus: (index: number, action: string) => void
}

const Item = ({ idx, item, changeItemValue, changeItemStatus }: ItemProps) => {

    const [editCurrentItem, setEditCurrentItem] = useState<boolean>(false)

    const node = useRef<HTMLDivElement>(null)
    const inputNode = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        setEditCurrentItem(true)
    }

    const isItemEmpty = () => !item.value

    const closeItemWhenItIsDone = () => {
        if (!isItemEmpty()) {
            changeItemStatus(item.itemIndex, 'finish')
            setTimeout(() => {
                setEditCurrentItem(!editCurrentItem)
            }, 0)
        }
    }

    const handleClickOutside = ({ target }: MouseEvent | TouchEvent) => {
        if (node?.current?.contains(target as Node)) {
            return
        }
        if (isItemEmpty()) {
            toast.error("Current item can't be empty")
            inputNode?.current?.focus()
            return
        }
        setEditCurrentItem(false)
    }

    useEffect(() => {
        if (editCurrentItem) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [editCurrentItem])

    return (
        <ItemContainer key={idx} id="item-container"
            onClick={() => handleClick()}
            ref={node}
        >
            <Tooltip style={{ width: '100%' }} direction={'bottom'} showMappleIf={!editCurrentItem}>
                <ItemComponentsContainer>
                    <ItemInput id="item-input" ref={inputNode}
                        value={item.value} type="text"
                        onChange={e => changeItemValue(item.itemIndex, e.target.value)}
                        editCurrentItem={editCurrentItem} done={item.status === 'done'} />
                    {editCurrentItem &&
                        <>
                            <ItemButton id="remove-btn" color={'#e34f4f'} onClick={() => changeItemStatus(item.itemIndex, 'remove')}>
                                <MinusIcon />
                            </ItemButton>
                            {<ItemButton id="done-btn" color={'#68e291'} hasBorder={true} onClick={() => closeItemWhenItIsDone()}>
                                <CheckIcon />
                            </ItemButton>}
                        </>
                    }
                </ItemComponentsContainer>
                <div>
                    Edit task
                </div>
            </Tooltip>
        </ItemContainer>
    );
};

export default Item;