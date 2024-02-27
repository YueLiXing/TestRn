//
//  RNTextView.h
//  TestRn
//
//  Created by 岳立兴 on 2024/2/26.
//

#import <UIKit/UIKit.h>
#import <React-Core/React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNTextView : UIView

@property (nonatomic, copy) NSString *text;
@property (nonatomic, copy, nullable) RCTDirectEventBlock callback;


@end

NS_ASSUME_NONNULL_END
